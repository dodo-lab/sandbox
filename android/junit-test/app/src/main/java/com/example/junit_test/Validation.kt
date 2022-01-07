package com.example.junit_test

object Validation {
    fun isEmail(value: String): Boolean {
        val emailPattern = "[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.+[a-z]+"
        val regex = Regex(pattern = emailPattern)
        return regex.matches(input = value)
    }
}