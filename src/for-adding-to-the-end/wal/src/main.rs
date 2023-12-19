use for_component::ForComponent;
use wal_core::router::builder::RouterBuilder;

mod for_component;

fn main() {
    RouterBuilder::default()
        .add_page::<ForComponent>("/")
        .build()
        .start();
}
