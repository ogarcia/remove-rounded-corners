const Main = imports.ui.main;
function init() {}
function enable() {
  Main.panel._leftCorner.actor.add_style_class_name('no-radius');
  Main.panel._rightCorner.actor.add_style_class_name('no-radius');
}
function disable() {
  Main.panel._leftCorner.actor.remove_style_class_name('no-radius');
  Main.panel._rightCorner.actor.remove_style_class_name('no-radius');
}
