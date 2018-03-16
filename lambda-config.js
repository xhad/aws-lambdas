module.exports = {
    accessKeyId: process.env['api_key'],
    secretAccessKey: process.env['aws_secret_access_key'],
    region: process.env['region'],
    handler: process.env['handler'],
    role: process.env['role'],
    functionName: process.env['function_name'],
    timeout: process.env['timeout'],
    memorySize: process.env['memory_size'],
    publish: process.env['publish'],
    runtime: process.env['runtime']
}
