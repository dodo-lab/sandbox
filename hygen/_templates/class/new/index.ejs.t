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
        normal: '<%= h.inflection.camelize("message_property") %>',
        normal2: '<%= h.inflection.camelize("messageProperty") %>',
        firstSmall: '<%= h.inflection.camelize("message_property", true) %>'
      }
    }
  }
}