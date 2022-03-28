import 'package:flutter/foundation.dart';

class TodoData extends ChangeNotifier {
  final List<String> todos;

  TodoData(this.todos);

  void add(String todo) {
    todos.add(todo);
    notifyListeners();
  }

  void complete(int index) {
    todos.removeAt(index);
    notifyListeners();
  }
}
