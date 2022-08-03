import csstype.Position
import csstype.px
import kotlinx.browser.document
import kotlinx.serialization.Serializable
import react.*
import react.css.css
import react.dom.html.ReactHTML
import react.dom.render
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.video


@Serializable
data class Video(
    val id: Int,
    val title: String,
    val speaker: String,
    val videoUrl: String
)

fun main() {
    val container = document.getElementById("root") ?: error("Couldn't find root container!")
    render(Welcome.create(), container)
}