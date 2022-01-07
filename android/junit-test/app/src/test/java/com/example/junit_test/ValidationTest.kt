package com.example.junit_test

import com.google.common.truth.Truth.*
import org.junit.Assert.*

import org.junit.Test

class ValidationTest {

    @Test
    fun isEmail() {
        assertTrue(Validation.isEmail("name@email.com"))
        assertFalse(Validation.isEmail("email.com"))
    }

    @Test
    fun isEmailTruth() {
        assertThat(Validation.isEmail("name@email.com")).isTrue()
        assertThat(Validation.isEmail("email.com")).isFalse()
    }
}