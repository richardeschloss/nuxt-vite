require('jsdom-global')()
require('browser-env')()
import test from 'ava'
import { resolve as pResolve } from 'path'
import { getModuleOptions, ModuleContext } from 'nuxt-test-utils'
import config from '@/nuxt.config'
import Module from '@/highcharts/module'

let pOptions, Plugin

function PluginContext(Plugin) {
  const self = this
  this.injected = {}
  this.inject = function(label, obj) {
    self.injected[label] = obj
  }
  Plugin(this, this.inject)  
}

test('Module: adds plugin with configured options', async (t) => {
  const tmpFile = pResolve('./highcharts/plugin.compiled.js')
  const moduleOpts = getModuleOptions(config, 'highcharts')
  const ctx = new ModuleContext({
    options: moduleOpts,
    module: Module,
    compileOpts: {
      src: pResolve('./highcharts/plugin.js'),
      tmpFile,
      overwrite: true
    }
  })
  ctx.registerModule()
  t.false(ctx.pluginAdded.ssr)
  t.is(ctx.pluginAdded.src, pResolve('./highcharts/plugin.js'))
  t.is(ctx.pluginAdded.fileName, 'nuxt-highcharts.js')
  t.truthy(ctx.pluginAdded.options.features)

  const { default: _Plugin, pOptions: _pOptions} = await import(tmpFile)
  pOptions = _pOptions
  Plugin = _Plugin
})

test('Plugin', (t) => {
  const ctx = new PluginContext(Plugin)
  t.truthy(ctx.injected)
  t.truthy(ctx.injected['highcharts'])
  const $highCharts = ctx.injected['highcharts']
  $highCharts.supportedFeatures.forEach((f) => {
    t.falsy($highCharts.featuresEnabled[f])
  })
  t.pass()
})