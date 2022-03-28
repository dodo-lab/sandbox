import 'package:flutter/material.dart';
import 'package:todo_app/todo_add_page.dart';

class TodoListPage extends StatelessWidget {
  const TodoListPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final todos = ['顔を洗う', '歯磨きをする', '寝る'];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Todo一覧'),
      ),
      body: Center(
        child: ListView.builder(
          itemCount: todos.length,
          itemBuilder: (context, index) {
            return Card(
              child: ListTile(
                title: Text(todos[index]),
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
