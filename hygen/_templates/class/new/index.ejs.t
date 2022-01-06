---
# npx hygen class new --name [ClassName]
to: app/<%=name%>.js
---
class <%= Name %> {
  work() {
    const helper = {
      // 文字列を複数形にする
      pluralize: {
        Hat: '<%= h.inflection.pluralize("Hat") %>',
        Person: '<%= h.inflection.pluralize("Person") %>'
      },
      // 文字列を単数形にする
      singularize: {
        Hats: '<%= h.inflection.singularize("Hats") %>',
        People: '<%= h.inflection.singularize("People") %>'
      },
      // 文字列をキャメルケースに変換する
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
    }
  }
}