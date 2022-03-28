import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todo_app/providers/todo_data.dart';

class TodoAddPage extends StatefulWidget {
  const TodoAddPage({Key? key}) : super(key: key);

  @override
  State<TodoAddPage> createState() => _TodoAddPageState();
}

class _TodoAddPageState extends State<TodoAddPage> {
  final _controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final todoData = context.read<TodoData>();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Todo追加'),
      ),
      body: Container(
        padding: const EdgeInsets.all(64.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: _controller,
            ),
            const SizedBox(height: 8),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () {
                  todoData.add(_controller.text);
                  Navigator.of(context).pop();
                },
                child: const Text('Todo追加'),
              ),
            ),
            const SizedBox(height: 8),
            SizedBox(
              width: double.infinity,
              child: TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                style: TextButton.styleFrom(
                  primary: Colors.red,
                ),
                child: const Text('キャンセル'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
