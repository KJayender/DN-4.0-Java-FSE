//Singletron Pattern exmaple

public class Main{
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("First log entry");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second log entry");

        // checking whether that both the loggers points the same instance or not
        if (logger1 == logger2) {
            System.out.println("Only one Logger instance exists!");
        } else {
            System.out.println("Logger instances are different!");
        }
    }
}