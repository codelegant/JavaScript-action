(function () {
  self.addEventListener("message", function (e) {
    self.postMessage("Bo knows" + e.data);
  });
})();