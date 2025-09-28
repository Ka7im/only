import type webpack from 'webpack'
import { type BuildOptons } from './types/config'

export function buildResolvers (options: BuildOptons): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
