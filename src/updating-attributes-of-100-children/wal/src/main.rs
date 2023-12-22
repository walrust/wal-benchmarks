use parent_component::ParentComponent;
use wal_core::router::builder::RouterBuilder;

mod child_component;
mod parent_component;

fn main() {
    RouterBuilder::default()
        .add_page::<ParentComponent>("/")
        .build()
        .start();
}
