import 'package:flutter/material.dart';

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
    );
  }
}
