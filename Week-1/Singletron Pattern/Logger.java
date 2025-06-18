public class Logger {
    private static Logger instance;
    private Logger() {    //constructor intilization
        System.out.println("Logger Initialized");
    }
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger(); // Late initialization or lazy
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("Log message: " + message);
    }
} 
    

