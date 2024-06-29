console.log("Hellow World")


class Repository {
    private_repo: boolean | null;

    constructor(private_repo: boolean | null = null) {
        this.private_repo = private_repo;
    }

    // Method to check and set the private_repo value
    checkAndSetPrivateRepo(value: boolean | null): void {
        if (value === null) {
            console.log("Setting private_repo to null");
            this.private_repo = null;
        } else {
            console.log(`Setting private_repo to ${value}`);
            this.private_repo = value;
        }
    }

    // Method to print the current value of private_repo
    printPrivateRepo(): void {
        console.log(`Current value of private_repo: ${this.private_repo}`);
    }
}

// Example usage
const repo1 = new Repository(false);
repo1.printPrivateRepo(); // Output: Current value of private_repo: false

repo1.checkAndSetPrivateRepo(null);
repo1.printPrivateRepo(); // Output: Current value of private_repo: null

const repo2 = new Repository();
repo2.printPrivateRepo(); // Output: Current value of private_repo: null

repo2.checkAndSetPrivateRepo(true);
repo2.printPrivateRepo(); // Output: Current value of private_repo: true
