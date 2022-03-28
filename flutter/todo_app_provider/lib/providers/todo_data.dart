import 'package:flutter/foundation.dart';

class TodoData extends ChangeNotifier {
  List<String> todos = [];

  void init(List<String> initTodos) {
    todos.addAll(initTodos);
    notifyListeners();
  }

  void add(String todo) {
    todos.add(todo);
    notifyListeners();
  }

  void complete(int index) {
    todos.removeAt(index);
    notifyListeners();
  }
}
