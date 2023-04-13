import vue from '@vitejs/plugin-vue'

interface Config {
    plugins?: any[]
}

const config: Config = {}

if(process.env.STORY_TIME == "1")
    config.plugins = [vue()]
export default config;