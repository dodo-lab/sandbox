---
# npx hygen class new --name [ClassName] <--requireConstructor>
to: app/<%= name %>.js
---
class <%= name %> {
<% if(locals.requireConstructor) { -%>
  constructor() {}

<% } -%>
  work() {
    const inflectionHelper = {
      // 文字列を複数形に変換
      pluralize: {
        Hat: '<%= h.inflection.pluralize("Hat") %>',
        Person: '<%= h.inflection.pluralize("Person") %>'
      },
      // 文字列を単数形に変換
      singularize: {
        Hats: '<%= h.inflection.singularize("Hats") %>',
        People: '<%= h.inflection.singularize("People") %>'
      },
      // 文字列をキャメルケースに変換
      camelize: {
        message_property: '<%= h.inflection.camelize("message_property") %>',
        messageProperty: '<%= h.inflection.camelize("messageProperty") %>',
        message_property_firstSmall: '<%= h.inflection.camelize("message_property", true) %>'
      },
      // 文字列をアンダースコア形式に変換
      underscore: {
        MessageProperties: '<%= h.inflection.underscore("MessageProperties") %>',
        messageProperties: '<%= h.inflection.underscore("messageProperties") %>',
      },
      // アンダースコア形式の文字列にスペースを入れて、文章形式に変換
      humanize: {
        message_properties: '<%= h.inflection.humanize("message_properties") %>',
        message_properties_firstSmall: '<%= h.inflection.humanize("message_properties", true) %>',
        MessageProperties: '<%= h.inflection.humanize("MessageProperties") %>'
      }
    }

    const changeCaseHelper = {
      upper: '<%= h.changeCase.upper("Upper") %>',
      lower: '<%= h.changeCase.lower("Lower") %>',
      camel: '<%= h.changeCase.camel("message_properties") %>',
      constant: '<%= h.changeCase.constant("message_properties") %>',
      dot: '<%= h.changeCase.dot("message_properties") %>',
      header: '<%= h.changeCase.header("message_properties") %>',
      isLower: '<%= h.changeCase.isLower("message_properties") %>',
      isUpper: '<%= h.changeCase.isUpper("message_properties") %>',
      lower: '<%= h.changeCase.lower("Message_Properties") %>',
      lcFirst: '<%= h.changeCase.lcFirst("Message_Properties") %>',
      no: '<%= h.changeCase.no("message_properties") %>',
      param: '<%= h.changeCase.param("message_properties") %>',
      pascal: '<%= h.changeCase.pascal("message_properties") %>',
      path: '<%= h.changeCase.path("message_properties") %>',
      sentence: '<%= h.changeCase.sentence("message_properties") %>',
      snake: '<%= h.changeCase.snake("message_properties") %>',
      swap: '<%= h.changeCase.swap("message_properties") %>',
      title: '<%= h.changeCase.title("message_properties") %>',
      upper: '<%= h.changeCase.upper("message_properties") %>',
    }

    // 定義済の変数
    const predefinedValiables = {
      templates: '<%= templates %>',
      actionfolder: '<%= actionfolder %>',
      generator: '<%= generator %>',
      action: '<%= action %>',
      subaction: '<%= subaction %>',
      cwd: '<%= cwd %>',
    }
  }
}