import 'package:flutter/material.dart';
import 'package:todo_app/providers/todo_data.dart';
import 'package:todo_app/todo_add_page.dart';
import 'package:provider/provider.dart';

class TodoListPage extends StatelessWidget {
  const TodoListPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final todoData = context.watch<TodoData>();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Todo一覧'),
      ),
      body: Center(
        child: ListView.builder(
          itemCount: todoData.todos.length,
          itemBuilder: (context, index) {
            return Card(
              child: ListTile(
                title: Text(todoData.todos[index]),
                trailing: IconButton(
                  icon: const Icon(Icons.check),
                  onPressed: () {
                    todoData.complete(index);
                  },
                ),
              ),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.of(context).push(MaterialPageRoute(
            builder: (context) {
              return const TodoAddPage();
            },
          ));
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
