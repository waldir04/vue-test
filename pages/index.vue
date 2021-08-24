<script>
  export default {
    middleware({ redirect }) {
      return redirect('/favorites');
    }
  }
</script>