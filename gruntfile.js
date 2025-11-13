module.exports = function(grunt) {
    // 1. Inicializa a configuração
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 2. Configuração da Tarefa "less"
        less: {
            development: {
                files: {
                    // "destino": "origem"
                    'dist/css/style.css': 'less/main.less' 
                },
                options: {
                    compress: true 
                }
            }
        },

        // 3. Configuração da Tarefa "uglify" (Compressão JS)
        uglify: {
            development: {
                files: {
                    // "destino": "origem"
                    'dist/js/scripts.js': 'js/main.js' 
                }
            }
        }
    });




    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 5. Registra a tarefa 'default'
    // Esta linha diz ao Grunt: "Quando alguém digitar 'grunt', 
    // rode as tarefas 'less' e 'uglify'"
    grunt.registerTask('default', ['less', 'uglify']);

}