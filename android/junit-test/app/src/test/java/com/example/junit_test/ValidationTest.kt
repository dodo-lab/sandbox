package com.example.junit_test

import org.junit.Assert.*

import org.junit.Test

class ValidationTest {

    @Test
    fun isEmail() {
        assertTrue(Validation.isEmail("name@email.com"))
        assertFalse(Validation.isEmail("email.com"))
    }
}