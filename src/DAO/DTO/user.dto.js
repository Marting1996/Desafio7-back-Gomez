export default class UserDTO {
    constructor(user) {
        this.first_name = user?.first_name ?? "NN";
        this.last_name = user?.last_name ?? "";
        this.email = user?.email ?? "";
        this.age = user?.age ?? 0;
        this.password = user?.password ?? "";
        this.cart = user?.cart ?? null;
        this.role = user?.role ?? "user";
    }
}
