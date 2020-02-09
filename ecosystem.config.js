module.exports = {
    apps: [{
        name: 'show-project-next',
        script: 'npm run start',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production'
        }
    }]
}
