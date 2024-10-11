module.exports = {
    apps: [{
        name: "project-management-application",
        script: "npm",
        args: "run dev",
        env: {
            NODE_ENV: "development",
        }
    }]
}