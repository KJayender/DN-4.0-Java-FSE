package com.example;

import org.junit.Test;

public class GreeTest {
    @Test
    public void testGreet() {
        Greet greet = new Greet();
        greet.says(); // This will print "Hello World" to the console
        // No assertion needed, just checking if it runs without exceptions
    }
    
}
