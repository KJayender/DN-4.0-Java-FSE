package ecommerce;
public class Myclass{
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Footwear"),
            new Product(3, "Watch", "Accessories"),
            new Product(4, "Keyboard", "Electronics"),
            new Product(5, "Phone", "Electronics"),
            new Product(6, "Backpack", "Accessories")
        };

        System.out.println("🔍 Linear Search Result:");
        Product found1 = SearchUtil.linearSearch(products, "Phone");
        System.out.println(found1 != null ? found1 : "Product not found.");

        SearchUtil.sortProducts(products);

        System.out.println("\n🔍 Binary Search Result:");
        Product found2 = SearchUtil.binarySearch(products, "Backpack");
        System.out.println(found2 != null ? found2 : "Product not found.");
    }
}