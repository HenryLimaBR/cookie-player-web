namespace FE {
  namespace RC {
    interface HomeProps { }
    interface HomeState { }
  }
  
  namespace SV {
    namespace Player {
      type event = {
        event: any
        dest: () => any
      }
    }
  }
}