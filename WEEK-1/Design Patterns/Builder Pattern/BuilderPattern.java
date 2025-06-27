
class Computer {
    
    private final String CPU;
    private final String RAM;
    private final String storage;

    // Constructors
    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.storage = builder.storage;
    }

    
    public String getCPU() {
         return CPU; }
    public String getRAM() { 
        return RAM; }
    public String getStorage() {
         return storage; }


    public static class Builder {
        private String CPU;
        private String RAM;
        private String storage;
     

        public Builder setCPU(String CPU) {
            this.CPU = CPU;
            return this;
        }

        public Builder setRAM(String RAM) {
            this.RAM = RAM;
            return this;
        }

        public Builder setStorage(String storage) {
            this.storage = storage;
            return this;
        }


        public Computer build() {
            return new Computer(this);
        }
    }

    @Override
    public String toString() {
        return "Computer [CPU=" + CPU + ", RAM=" + RAM + ", Storage=" + storage + "]";
    }
}

public class BuilderPattern{
    public static void main(String[] args) {
        // Create a Computer using the Builder pattern
        Computer computer = new Computer.Builder()
                .setCPU("Intel Core i7")
                .setRAM("16GB")
                .setStorage("512GB SSD")
                .build();

        // Print the Computer details
        System.out.println(computer);
    }   
}