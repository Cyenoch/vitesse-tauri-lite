#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{App, Manager, WebviewAttributes};

#[tokio::main]
async fn main() {
  tauri::Builder::default()
    .setup(init)
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

pub fn init(app: &mut App) -> std::result::Result<(), Box<dyn std::error::Error + Send>> {
  let win = app.get_window("main").unwrap();
  Ok(())
}
