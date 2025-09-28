import type webpack from 'webpack'
import { type BuildOptons } from './types/config'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { buildCssLoaders } from './loaders/buildCssLoaders'

export function buildLoaders (options: BuildOptons): webpack.RuleSetRule[] {
  
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [{ loader: 'file-loader' }]
  }

  const cssLoader = buildCssLoaders(options.isDev)

  const typescriptLoader = {
    test: /\.(ts|tsx)?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [ReactRefreshTypeScript()].filter(Boolean)
          }),
          transpileOnly: options.isDev
        }
      }
    ],
    exclude: /node_modules/
  }

  return [ cssLoader, svgLoader, fileLoader, typescriptLoader]
}
