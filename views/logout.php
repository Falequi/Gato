                                    <form action="../controllers/usuarioCtl.php" method="post">
                                        <table>
                                            <td>
                                                <input  type="submit" id="btnlogout" 
                                                        class="btn btn-primary btn-lg btn-block" 
                                                        value="Cerrar Sesion">
                                            </td>
                                            <td>
                                                <a  href="views/usuario.views.php" 
                                                    class="btn btn-primary btn-lg btn-block">
                                                    Editar
                                                </a>
                                            </td>
                                        </table>    
                                        <input type="text" id="type" name="type"  value="logout" hidden>
                                    </form>
