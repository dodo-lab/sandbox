import 'package:flutter/foundation.dart';

class TodoData extends ChangeNotifier {
  final List<String> _todos;

  List<String> get todos => _todos;

  TodoData(List<String> todos) : _todos = todos;

  void add(String todo) {
    _todos.add(todo);
    notifyListeners();
  }

  void complete(int index) {
    _todos.removeAt(index);
    notifyListeners();
  }
}
