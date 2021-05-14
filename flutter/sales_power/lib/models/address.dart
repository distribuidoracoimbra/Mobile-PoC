class Address {
  String country;
  String city;
  String state;
  String zipPostalCode;
  String number;
  String complement;

  Address(
      {this.country,
        this.city,
        this.state,
        this.zipPostalCode,
        this.number,
        this.complement});

  Address.fromJson(Map<String, dynamic> json) {
    country = json['country'];
    city = json['city'];
    state = json['state'];
    zipPostalCode = json['zip_postal_code'];
    number = json['number'];
    complement = json['complement'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['country'] = this.country;
    data['city'] = this.city;
    data['state'] = this.state;
    data['zip_postal_code'] = this.zipPostalCode;
    data['number'] = this.number;
    data['complement'] = this.complement;
    return data;
  }
}