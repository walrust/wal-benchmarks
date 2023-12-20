use another_page::AnotherPage;
use home_page::HomePage;
use wal_core::router::builder::RouterBuilder;

mod another_page;
mod home_page;

fn main() {
    RouterBuilder::default()
        .add_page::<HomePage>("/")
        .add_page::<AnotherPage>("/another")
        .build()
        .start();
}
