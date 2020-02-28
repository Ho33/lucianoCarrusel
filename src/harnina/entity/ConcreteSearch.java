package harnina.entity;

public class ConcreteSearch {
    private int inicio;
    private int step;

    public ConcreteSearch(int inicio, int step) {
        this.inicio = inicio;
        this.step = step;
    }

    public int getInicio() {
        return inicio;
    }

    public void setInicio(int inicio) {
        this.inicio = inicio;
    }

    public int getStep() {
        return step;
    }

    public void setStep(int step) {
        this.step = step;
    }
}
