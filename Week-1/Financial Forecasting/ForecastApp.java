public class ForecastApp {
    public static void main(String[] args) {
        double pv = 10000.0;
        double gr = 0.05;
        int p = 10;

        // Using recursive version
        double recres = FinancialForecast.futureValue(pv, gr, p);
        System.out.printf("Future Value after %d years: Rs %.2f%n", p, recres);

        // Using iterative version
        double ires = FinancialForecast.futureValueIterative(pv, gr, p);
        System.out.printf("Iterative Future Value after %d years: Rs %.2f%n", p, ires);
    }
}