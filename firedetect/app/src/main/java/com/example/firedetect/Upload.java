package com.example.firedetect;

public class Upload {
    private String imguri,imgname, city, country, address;
    double longi, lati;



    public Upload(String imguri, String imgname, String city, String country, String address, double longi, double lati) {
       this.imguri = imguri;
        this.imgname = imgname;
        this.city = city;
        this.country = country;
        this.address = address;
        this.longi = longi;
        this.lati = lati;
    }

    public String getImguri() {
        return imguri;
    }

    public void setImguri(String imguri) {
        this.imguri = imguri;
    }

    public String getImgname() {
        return imgname;
    }

    public void setImgname(String imgname) {
        this.imgname = imgname;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getLongi() {
        return longi;
    }

    public void setLongi(double longi) {
        this.longi = longi;
    }

    public double getLati() {
        return lati;
    }

    public void setLati(double lati) {
        this.lati = lati;
    }
}
