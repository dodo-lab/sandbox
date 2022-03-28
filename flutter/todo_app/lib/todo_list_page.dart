import 'package:flutter/material.dart';
import 'package:todo_app/todo_add_page.dart';

class TodoListPage extends StatefulWidget {
  const TodoListPage({Key? key}) : super(key: key);

  @override
  State<TodoListPage> createState() => _TodoListPageState();
}

class _TodoListPageState extends State<TodoListPage> {
  final _todos = <String>[];

  @override
  void initState() {
    super.initState();

    _todos.addAll(['顔を洗う', '歯磨きをする', '寝る']);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Todo一覧'),
      ),
      body: Center(
        child: ListView.builder(
          itemCount: _todos.length,
          itemBuilder: (context, index) {
            return Card(
              child: ListTile(
                title: Text(_todos[index]),
                trailing: IconButton(
                  icon: const Icon(Icons.check),
                  onPressed: () {
                    setState(() {
                      _todos.removeAt(index);
                    });
                  },
                ),
              ),
            );
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          final todo = await Navigator.of(context).push(MaterialPageRoute(
            builder: (context) {
              return const TodoAddPage();
            },
          ));

          if (todo != null) {
            setState(() {
              _todos.add(todo);
            });
          }
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
