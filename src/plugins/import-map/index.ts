import { Module } from "./types";
import { Plugin as VitePlugin, UserConfig, ConfigEnv } from "vite";

export interface PluginImportMapParam {
  /**
   * modules
   */
  modules: Module[];
}

export class PluginImportMap implements VitePlugin {
  /**
   * work path
   *
   * use vite root
   *
   * default is process.cwd()
   */
  public workPath!: string;
  /**
   * if is build
   */
  public isBuild = false;
  /**
   * all modules
   */
  public moduleMap: Record<string, string> = {};
  /**
   * all css
   */
  public cssList: string[] = [];

  constructor(param: PluginImportMapParam) {
    const { modules } = param;
    modules.forEach((m) => {
      const { name, path, css } = m;
      if (path) this.moduleMap[name] = path;
      if (css instanceof Array) this.cssList = this.cssList.concat(css);
      else if (css) this.cssList.push(css);
    });
  }

  /**
   * vite plugin name
   */
  public name = "vite-plugin-import-map";
  /**
   * vite plugin config
   */
  public config = (cfg: UserConfig, env: ConfigEnv): UserConfig => {
    // set local
    const { root } = cfg;
    this.workPath = root ?? process.cwd();
    const { command } = env;
    this.isBuild = command === "build";
    // use config
    const userConfig: UserConfig = {
      build: {
        rollupOptions: {},
      },
    };
    // set config if is build
    if (this.isBuild) {
      userConfig.build!.rollupOptions!.external = Object.keys(this.moduleMap);
    }
    return userConfig;
  };
  /**
   * vite plugin trancsfor html
   */
  public transformIndexHtml = (html: string): string => {
    // build style
    const styleCode = this.cssList
      .map((c) => {
        return `<link href="${c}" rel="stylesheet">`;
      })
      .join("\n");
    // build script
    const scriptCode = this.isBuild
      ? `<script type="importmap">\n${JSON.stringify({
          imports: this.moduleMap,
        })}\n</script>`
      : "";
    return html.replace(
      /<\/title>/i,
      `</title>\n${styleCode}${scriptCode}\n`,
    );
  };
}

/**
 * build a new plugin
 */
export function importMap(param: PluginImportMapParam) {
  return new PluginImportMap(param);
}
