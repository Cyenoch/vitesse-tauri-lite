#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{App, Manager};

#[tokio::main]
async fn main() {
  tauri::Builder::default()
    .setup(init)
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

pub fn init(app: &mut App) -> std::result::Result<(), Box<dyn std::error::Error>> {
  let _win = app.get_window("main").unwrap();
  #[cfg(debug_assertions)]
  _win.open_devtools();
  _win.set_size(tauri::PhysicalSize::new(1280, 850)).unwrap();
  _win.eval("console.log('js code');").unwrap_or_default();
  Ok(())
}
