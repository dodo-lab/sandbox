---
# npx hygen class new --name [ClassName]
to: app/<%=name%>.js
---
class <%= Name %> {
  work() {
    const helper = {
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
  }
}