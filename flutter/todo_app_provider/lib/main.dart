import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todo_app/providers/todo_data.dart';
import 'package:todo_app/todo_list_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final todos = TodoData(['顔を洗う', '歯磨きをする', '寝る']);

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<TodoData>.value(
      value: todos,
      child: MaterialApp(
        title: 'Todo App',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: const TodoListPage(),
      ),
    );
  }
}
