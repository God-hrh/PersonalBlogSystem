module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    signup: {
      // page 的入口
      entry: 'src/signup/main.js',
      // 模板来源
      template: 'public/index.html',//模板页面
      // 在 dist/index.html 的输出
      filename: 'signup.html',//
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '注册页面'
    },
    login: {
      // page 的入口
      entry: 'src/login/main.js',
      // 模板来源
      template: 'public/index.html',//模板页面
      // 在 dist/index.html 的输出
      filename: 'login.html',//
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '登陆页面'
    },
    admin: {
      // page 的入口
      entry: 'src/admin/main.js',
      // 模板来源
      template: 'public/index.html',//模板页面
      // 在 dist/index.html 的输出
      filename: 'admin.html',//
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '主页面'
    }
  },devServer: {
    proxy: "http://localhost:3000"
  },
}