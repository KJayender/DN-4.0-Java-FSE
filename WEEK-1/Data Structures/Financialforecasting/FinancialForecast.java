public class FinancialForecast {

    // to calculate future value
    public static double futureValue(double pv, double gr, int p) {
        if (p == 0) {
            return pv;
        }
        return (1 + gr) * futureValue(pv, gr, p- 1);
    }
}