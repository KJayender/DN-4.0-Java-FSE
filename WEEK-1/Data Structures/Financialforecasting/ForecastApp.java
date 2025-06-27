import java.util.*;
public class ForecastApp {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("enter the Present value");
        double pv = sc.nextDouble();
        System.out.println("enter the growth rate");
        double gr = sc.nextDouble();
        System.out.println("enter the number of years");
        int p = sc.nextInt();

        // Using recursive version
        double recres = FinancialForecast.futureValue(pv, gr, p);
        System.out.printf("Future Value after %d years: Rs %.2f%n", p, recres);
}
}