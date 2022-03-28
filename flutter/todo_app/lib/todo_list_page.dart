import 'package:flutter/material.dart';
import 'package:todo_app/todo_add_page.dart';

class TodoListPage extends StatelessWidget {
  const TodoListPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Todo一覧'),
      ),
      body: const Center(
        child: Text('Todoリスト一覧画面'),
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
