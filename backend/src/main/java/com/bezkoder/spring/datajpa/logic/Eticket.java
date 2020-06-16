package com.bezkoder.spring.datajpa.logic;

import java.util.Random;

public class Eticket {

    private int eticketno;

    private static int generateEticketno()
    {
        Random randomno = new Random();
        return randomno.ints(800000000,890000000).findFirst().getAsInt();
    }

// Maybe I will add something later here
    public int getEticketno()
    {
        return generateEticketno();
    }

    public int getEticketdefauld()
    {
        return generateEticketno();
    }

     public int getEticketdefault()
    {
        return generateEticketno();
    }

	
}
